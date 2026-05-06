async function sample(){
    const response = await fetch('https://localhost:5500/data');
    const data = await response.json();
    console.log(data);
}

