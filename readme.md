# Basic NodJS modules should know
- Press 'ctrl + `' to open terminal
- To run server type: "node server.js" in terminal // server2,3,4....js
- To close server press "ctrl + c" in terminal
- You have to close current open server before run another server
- On server2.js your can type anything after "/" e.g. localhost:8000/about so we got "/about" in html body element
- On server3.js we type: "localhost:8000/?date=05&month=05&year=2024" so the result is: "05/05/2024"
- On server4.js we display index.html file using 'fs' module
- On appendFile.js this will append data to append.txt or create new append.txt if it's not exist
- On openFile.js function open() come with parameter flags 'w' it's mean you open file open.txt for write or create new open.txt if it's not exist
- On writeFile.js funtion writeFile() will make overwrite old data with new data in write.txt or create new write.txt if it's not exist
- On unlinkFile.js function unlink() will delete append.txt file
- On renameFile.js function rename() will rename open.txt to append.txt
# How to install module by npm (Node Package Manager)
- Very first thing you should do before install any npm you must install package.json by type 'npm init -y'
* '-y' mean it won't ask you any question while install npm