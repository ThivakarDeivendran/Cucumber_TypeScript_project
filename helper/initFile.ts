const fs =require ("fs-extra");
try{
    fs.ensureDir("testReportResults");
    fs.emptyDir("testReportResults");
}catch(error){
    console.log("Folder not present "+ error);
}
