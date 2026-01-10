async function copy(text) {
    const copied_popup = document.getElementById("copied");
    if (!copied_popup) return;

    await navigator.clipboard.writeText(text);
    copied_popup.classList.add("visible");
    setTimeout(() => {
        copied_popup.classList.remove("visible");
    }, 3000);
}
