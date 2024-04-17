const data=[/*{
    title: 'Aprendiendo javaScript',
    year: 2021,
    isbn : '979-1268745',
    author: 'Carlos Azaustre'
},
{
    title: 'Aprendiendo python',
    year: 2020,
    isbn : '979-2394581',
    author: 'Carlos Azaustre'
},
{
    title: 'Aprendiendo Java',
    year: 2019,
    isbn : '979-1264845',
    author: 'Carlos Azaustre'
}*/
]

async function fetchData(){
    return new Promise((resolve, reject)=>{
        if(data.length===0){
            reject('Data es empty');
        }
        setTimeout(()=>{
            resolve(data)
        },3000)
    })
}

/*getData()
.then(valor=>console.log(valor))
.catch((error=>console.log(error.message)))*/


async function getData()
{
try{
    const books = await fetchData();
    console.log(books)
}catch(error){
    console.log(error)
}
}

getData()