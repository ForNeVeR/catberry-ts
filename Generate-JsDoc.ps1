$catberryPath = '.\catberry'

jsdoc -r $catberryPath -d docs
cmd /c "jsdoc -r $catberryPath -t templates/haruki -d console -q format=xml > catberry.xml"
