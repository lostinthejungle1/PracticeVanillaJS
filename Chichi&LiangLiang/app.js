const START_DATE = new Date('04/22/2023');

const count = document.querySelector('.days-count');

count.textContent = Math.ceil((new Date().getTime() - START_DATE.getTime())/(24*60*60*1000));