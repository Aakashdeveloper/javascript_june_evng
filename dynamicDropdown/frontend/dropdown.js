const url = "http://localhost:4500";

const getCity = () => {
    fetch(url,{method:'GET'})
    .then((data) => data.json())
    .then((out) => {
        for(i=0;i<out.length;i++){
            console.log(out[i].name)
            var node = document.createElement('option');
            var textnode = document.createTextNode(out[i].name);
            node.appendChild(textnode)
            document.getElementById('city').appendChild(node)
        }
    })
}