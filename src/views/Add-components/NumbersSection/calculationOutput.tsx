const calculationOutput = (text:string , output = "0") =>{
    switch (text) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            if (output === '0') {
                return text;
            } else {
                return output + text
            }
        case "删除":
            if (output.length === 1) {
                return "0"
            } else {
                return output.slice(0, output.length - 1)
            }
        case "清空":
            return "0";
        case ".":
            if(!output.includes(".")){
                return output + text
            }else {
                return output
            }
        default:
            return "0"
    }

};
export {calculationOutput}