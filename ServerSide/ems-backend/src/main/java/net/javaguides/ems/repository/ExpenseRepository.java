package net.javaguides.ems.repository;

import net.javaguides.ems.entity.Expense;
import net.javaguides.ems.entity.Expense.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    // Custom query method to retrieve expenses by type
    List<Expense> findByExpenseType(Category expenseType);

    // You can add other custom query methods if needed
}
