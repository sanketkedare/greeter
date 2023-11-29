function RandomMassages()
{
    const masages = [ "Namskar","Hello", "Ram Ram"]
    
    for(let i = 0; i< 10; i++)
    {
        const random = Math.floor(Math.random()* masages.length);
        console.log(masages[random]);
    }
}

RandomMassages();