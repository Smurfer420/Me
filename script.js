function switchTab(id) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    if (tab.id === id) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}