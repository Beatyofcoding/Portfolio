try {
    console.log('Before errors')
    // here there will be errors
    lalala
    console.log('after errors')
}catch (err) {
    console.log('Error',err)
}finally {
    console.log('Finally!')
}
}