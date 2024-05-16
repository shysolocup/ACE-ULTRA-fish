/* 
context could be an Object or an Array
in Object context it'll look for json statements like key = value
in Array context it'll just get the content of the line
*/

function AceReader(text, context) {
    let spl = text.split("\n");

    spl = spl.map((v) => {
        let hashIndex = undefined;

        return v.split("").filter((cv, ci) => {

            if (cv == "#" && !hashIndex && hashIndex !== 0) hashIndex = ci;
            return !(ci >= hashIndex)
        }).join("");
    
    });

    let stuff = spl.join("\n").trim().replace(/(\r\n|\n|\r)/gm, "");;

    spl = stuff.split(",");

    return spl;
}

module.exports = AceReader;