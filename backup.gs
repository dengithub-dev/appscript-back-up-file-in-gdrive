// System Name: ENROLLMENT CONCERN ID121 Freshmen and Transferees
// System Link: https://docs.google.com/spreadsheets/d/1zgrs73X4ZNLcxEdmHZB-ZXtHjkx0dqtiG_xdZfvnVrs/edit#gid=679748804
// Date Created: August 25, 2021, by Rommel Tupig, Dennis Balinhawang
// Stable (Y/N)? Y

//Backup code for your spreadsheet
function BackupCopy() {
  //get id of the spreadsheet
  var file = DriveApp.getFileById("spreadsheet id");
  //get id of the drive destination for the spreadsheet copy
  var destination = DriveApp.getFolderById("folder id");
  //format date to extend in the filename
  var formattedDate = Utilities.formatDate(new Date(), Session.getScriptTimeZone() , "yyyy-MM-dd HH:mm:ss"); //format - 2021-06-14 02:53:43
  var name = formattedDate + "Name of sheet";
  //make a copy of the file
  file.makeCopy(name, destination);
  SearchFile_then_move(); //run search and move function
}

//function to search the form embedded in the sheet then put it to the Back up folder
function SearchFile_then_move() {
  var files = DriveApp;
  var folderIter = files.getFoldersByName("Name of you gdrive folder");
  var folder = folderIter.next();
  var fileIter = folder.getFiles();
  var destination_folder = folder.getFoldersByName("Name of destination folder ").next();
  
  while(fileIter.hasNext()){
	var file = fileIter.next();
	var isfileexist = file.getName();
    if (isfileexist === "Name of file"){
       file.moveTo(destination_folder)
    }
   }
}


