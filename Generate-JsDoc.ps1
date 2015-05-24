function Generate-Doc($module, $path) {
  cmd /c "jsdoc -r $path -t templates/haruki -d console -q format=xml > $module.xml"
}

Generate-Doc 'catberry' '.\catberry\lib'
Generate-Doc 'catberry-locator' '.\catberry-locator\lib'
