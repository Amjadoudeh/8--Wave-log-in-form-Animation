<<<<<<< HEAD
const labels = document.querySelectorAll('.form-control label')
labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter,idx) => `<span style="transition-delay:${idx * 30}ms">${letter}</span>`)
    .join('')
})
=======
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter,idx) => `<span style="transition-delay:${idx * 30}ms">${letter}</span>`)
    .join('')
})
>>>>>>> 4a086f82f2b6593884827f86c82d799d99c0e941
