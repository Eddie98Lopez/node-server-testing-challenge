let data = [
    {id:1,
    name:"lalo"},
    {id: 2,
    name:'Eddie'}
]

const insert = (newStuff) =>{
    data= [...data, newStuff]
    const result = data.filter(item=>item.id = newStuff.id)[0]
    return Promise.resolve(result)
}

const remove = (id) =>{

    const removed = data.filter(item => id === item.id)[0]

    data = data.filter(item => item.id !== id)
    return Promise.resolve({deleted: removed, data: data })

}

module.exports = {insert, remove, data}