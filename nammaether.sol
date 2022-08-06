
contract BMTC {
    string[] private data;
    string[] private busInfo;
    mapping (address => bool) private etms;
    
    address private deployer;

    constructor(){
       deployer = msg.sender;
    }

    function addEtm(address newEtmAddress, string memory newBusInfo) public returns(bool){
        if(msg.sender == deployer){
            etms[address(newEtmAddress)] = true;
            busInfo.push(newBusInfo);
            return(true);
        }
        else{
            return(false);
        }
    }

    function removeConductors(address conductorAddress) public returns(bool){
        if(msg.sender == deployer){
            delete etms[conductorAddress];
            return(true);
        }
        else{
            return(false);
        }
    }

    function getData() public view returns (string[][] memory ) {
        string[][] memory  out = new string[][](2);
        out[0] = data;
        out[1] = busInfo;
        return out ;
    }

    function getLatestData() public view returns(string[][] memory){
        string[][] memory  out = new string[][](2);
        if(data.length < 50){
            out[0] = data;
        }
        else{
           string[] memory temp = new string[](50);
            for(uint256 i = data.length; i > data.length - 50; i --){
                temp[i-data.length] = data[i];
            }
        }
        out[1] = busInfo;
        return(out);
    }   

    function publishData(string memory newValue) public returns(bool){
        if(etms[msg.sender] == true){
            data.push(newValue);
            return(true);
        }
        else{
           return(false);
        }
    }
}
