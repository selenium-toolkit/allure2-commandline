package io.qameta.allure.seleniumToolkit;

/**
 * This class is used to store the name and link of a file.
 *
 * @since 2.0
 */
public class FileInfo {
    private final String name;
    private final String link;

    public FileInfo(final String name, final String link) {
        this.name = name;
        this.link = link;
    }

    // Getter und Setter
    public String getName() {
        return name;
    }


    public String getLink() {
        return link;
    }

}
