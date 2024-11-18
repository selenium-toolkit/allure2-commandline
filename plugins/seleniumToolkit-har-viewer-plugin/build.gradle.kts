plugins {
    `java-library-distribution`
}

description = "Allure SeleniumToolkit Har-Viewer"

artifacts.add("allurePlugin", tasks.distZip)
artifacts.add("archives", tasks.distZip)
