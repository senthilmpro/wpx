
import utils from './archive-util';

const parser = {
    parseContent: (posts) => {
        let objArray = [];
        posts.forEach((val) => {
            let content = val.content;
            let title = val.title;
            let htmlText = utils.parseContent(content);
            let decodedText = utils.parseEncodedContent(htmlText);
            let obj = utils.convertToObject(decodedText);
            let finalObj = {
                ...obj,
                title: title
            }
            objArray.push(finalObj);
        })
        console.log("OBJ ARRAY", objArray);
        return objArray;

        //let htmlText = `eyJ18a8244abcmwiOiJodHRwOi8vYXJjaGl2ZS5vcmcvZGV0YWlscy8yMDIxLTUtMjktdG1wMHgtMTc4MTIzNzQiLCJ0b3JyZW50TmFtZSI6IkJpZy5GcmVha2luZy5SYXQuMjAyMC4xMDgwcC5CbHVSYXkuMTQwME1CLkRENS4xLngyNjQtR2FsYXh5UkcudG9ycmVudCIsInZlcnNpb24iOjF9`;
        
    }
}

export default parser;