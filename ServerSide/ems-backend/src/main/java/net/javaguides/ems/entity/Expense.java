package net.javaguides.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "expenses")
public class Expense {

    enum Category {
        Entertainment,
        Education,
        Hospital,
        Grocery,
        Insurance,
        Other
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int expenseID;
    private double expenseAmount;
    private String description;
    private LocalDate expenseDate;

    @Enumerated(EnumType.STRING)
    private Category expenseType;

    @ManyToOne
    @JoinColumn(name = "user_id") // Assuming you have a field named "user_id" in the Expense table
    private User user;

}
