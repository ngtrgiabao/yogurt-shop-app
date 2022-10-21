const validationSearch = (frm) => {
    frm.submit();
}

const handleSearch = () => {
    const url = new URL(window.location);
    const ws = url.searchParams.get("words");
    document.getElementById("searchDetails").innerHTML = `<h1>Từ khóa cần tìm là: </h1> <b> ${ws} </b>`
}