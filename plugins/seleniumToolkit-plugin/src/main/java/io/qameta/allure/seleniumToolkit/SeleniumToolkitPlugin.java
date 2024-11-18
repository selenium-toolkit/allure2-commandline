package io.qameta.allure.seleniumToolkit;

import io.qameta.allure.Aggregator;
import io.qameta.allure.Reader;
import io.qameta.allure.context.JacksonContext;
import io.qameta.allure.core.Configuration;
import io.qameta.allure.core.LaunchResults;
import io.qameta.allure.core.ResultsVisitor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.stream.Stream;

/**
 * The plugin adds packages tab to the report.
 *
 * @since 2.0
 */
public class SeleniumToolkitPlugin implements Aggregator, Reader {
    private static final Logger LOGGER = LoggerFactory.getLogger(SeleniumToolkitPlugin.class);
    public static final String TOOLKIT_DATA_FOLDER = "selenium-toolkit-data";
    public static final String TOOLKIT_DATA_PROPERTIES = "toolkit-data.properties";
    public static final String DATA = "data";

    private String resultFolder = "";

    @Override
    public void aggregate(final Configuration configuration,
                          final List<LaunchResults> launches,
                          final Path outputDirectory) throws IOException {
        final JacksonContext jacksonContext = configuration
                .requireContext(JacksonContext.class);

        // Der Pfad zum Zielordner im Allure-Ergebnisverzeichnis.
        final Path targetDataFolder = Files.createDirectories(outputDirectory.resolve(DATA)
                .resolve(TOOLKIT_DATA_FOLDER));

        // Der Pfad zum Quellordner im Test-Ergebnisverzeichnis.
        final Path sourceDataFolder = Paths.get(resultFolder);

        // Kopieren Sie alle Dateien und Verzeichnisse aus dem Quellordner in den Zielordner.
        final List<FileInfo> fileList = new ArrayList<>();
        try (Stream<Path> paths = Files.walk(sourceDataFolder)) {
            paths.forEach(source -> {
                final Path destination = targetDataFolder.resolve(sourceDataFolder.relativize(source));
                if (!source.getFileName().toString().equals(TOOLKIT_DATA_PROPERTIES)) {
                    try {
                        final Path file = Files.copy(source, destination, StandardCopyOption.REPLACE_EXISTING);
                        if (file.toFile().isFile()) {
                            fileList.add(
                                    new FileInfo(file.toFile().getName(),
                                            outputDirectory.resolve(DATA).getFileName().toString()
                                                    + File.separator
                                                    + TOOLKIT_DATA_FOLDER
                                                    + File.separator
                                                    + file.toFile().getName()
                                    )
                            );
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            });
        }

        LOGGER.info("Start Copying files to " + targetDataFolder.toAbsolutePath().toString());


        // Beispiel für das Schreiben zusätzlicher Daten
        final Path dataFile = targetDataFolder.resolve("toolkit.json");
        try (OutputStream os = Files.newOutputStream(dataFile)) {
            jacksonContext.getValue().writeValue(os, extractData());
        }

        // Beispiel für das Schreiben zusätzlicher Daten
        final Path fileListDataFile = targetDataFolder.resolve("fileList.json");
        try (OutputStream os = Files.newOutputStream(fileListDataFile)) {
            jacksonContext.getValue().writeValue(os, fileList);
        }
        LOGGER.info("End Copying files to " + targetDataFolder.toAbsolutePath().toString());
    }

    private Object extractData() {

        //extraction logic
        final Properties properties = new Properties();
        final Path toolkitdataFile = Paths.get(resultFolder, TOOLKIT_DATA_PROPERTIES);
        try (InputStream input = new FileInputStream(toolkitdataFile.toFile())) {
            final Properties prop = new Properties();

            // load a properties file
            prop.load(input);
            properties.putAll(prop);

        } catch (IOException ex) {
            ex.printStackTrace();
        }
        return properties;
    }

    @Override
    public void readResults(Configuration configuration, ResultsVisitor visitor, final Path directory) {
        resultFolder = directory.resolve(TOOLKIT_DATA_FOLDER).toAbsolutePath().toString();
    }
}
