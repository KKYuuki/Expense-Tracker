package net.javaguides.ems.service;

import net.javaguides.ems.entity.Expense;
import net.javaguides.ems.entity.Expense.Category;
import net.javaguides.ems.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExpenseService {
    private final ExpenseRepository expenseRepository;

    @Autowired
    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    // Create
    public Expense createExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    // Read
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    public Optional<Expense> getExpenseById(Long expenseId) {
        return expenseRepository.findById(expenseId);
    }

    // Retrieve expenses by type
    public List<Expense> getExpensesByType(Category expenseType) {
        return expenseRepository.findByExpenseType(expenseType);
    }

    // Update
    public Expense updateExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    // Delete
    public void deleteExpense(Long expenseId) {
        expenseRepository.deleteById(expenseId);
    }
}
