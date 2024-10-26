// Selecting DOM elements
const description = document.getElementById('Description');
const amount = document.getElementById('Amount');
const addIncomeBtn = document.getElementById('Addincome');
const addExpenseBtn = document.getElementById('AddExpende');

// Income and Expense containers
const incomeContainer = document.querySelector('.Income-1');
const expenseContainer = document.querySelector('.Expense');

// Initial values for totals
let totalEarned = 0; // Initial value as shown in your example
let totalAvailable = 0;
let totalSpent = 0;

// Function to update totals
function updateTotals() {
    document.querySelector('.mny1 h5').textContent = `${totalEarned.toFixed(2)}`;
    document.querySelector('.mny2 h5').textContent = `${totalAvailable.toFixed(2)}`;
    document.querySelector('.mny3 h5').textContent = `${totalSpent.toFixed(2)}`;
}

// Function to create a new income/expense item
function createItem(type, desc, amt) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('Pay');

    if (type === 'income') {
        newDiv.innerHTML =` ${desc}<span style="color: green;">$${amt}</span><i class="fa-regular fa-trash-can"></i>`
        incomeContainer.appendChild(newDiv);
    } else if (type === 'expense') {
        newDiv.innerHTML = `${desc}<span style="color: red;">$${amt}</span><i class="fa-regular fa-trash-can"></i>`
        expenseContainer.appendChild(newDiv);
    }

    // Enable delete functionality for the trash icon
    const trashIcon = newDiv.querySelector('i');
    trashIcon.addEventListener('click', function() {
        newDiv.remove();
        // Update totals when an item is deleted
        if (type === 'income') {
            totalEarned -= amt;
            totalAvailable -= amt;
        } else if (type === 'expense') {
            totalSpent -= amt;
            totalAvailable += amt;
        }
        updateTotals();
    });
}

// Event listener for adding income
addIncomeBtn.addEventListener('click', () => {
    const desc = description.value.trim();
    const amt = parseFloat(amount.value);

    if (desc && !isNaN(amt) && amt > 0) {
        // Add income item
        createItem('income', desc, amt);
        // Update totals
        totalEarned += amt;
        totalAvailable += amt;
        updateTotals();
    }

    // Clear input fields
    description.value = '';
    amount.value = '';
});

// Event listener for adding expense
addExpenseBtn.addEventListener('click', () => {
    const desc = description.value.trim();
    const amt = parseFloat(amount.value);

    if (desc && !isNaN(amt) && amt > 0) {
        // Add expense item
        createItem('expense', desc, amt);
        // Update totals
        totalSpent += amt;
        totalAvailable -= amt;
        updateTotals();
    }

    // Clear input fields
    description.value = '';
    console.log(description)
    amount.value = '';
    console.log(amount)
});

// Initialize totals on page load
updateTotals();









