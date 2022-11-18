const validationSearch = () => {
    const frm = document.forms["frm-search"];
    if (frm.words.value.length > 0) {
        frm.submit();
    }
};
