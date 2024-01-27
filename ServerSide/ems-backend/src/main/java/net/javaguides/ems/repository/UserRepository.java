package net.javaguides.ems.repository;

import net.javaguides.ems.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // You can add custom query methods if needed
}
