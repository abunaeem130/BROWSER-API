console.log(' i am here')


// alert('ma is comming');
const maComming = () => {
    alert('Ammu is comming . open the book')
}
const askPicnic = () => {
    const response = confirm('are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('amake fee ta bkash kore dee')
    }
    else {
        console.log('dure giye mor')
    }
}
const askName = () => {
    const name = prompt('whats your name');
    if (name) {
        console.log(name);
    }

}