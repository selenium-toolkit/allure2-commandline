plugins {
    `java-library-distribution`
}

description = "Selenium Toolkit Axe Plugin"

artifacts.add("allurePlugin", tasks.distZip)
artifacts.add("archives", tasks.distZip)
