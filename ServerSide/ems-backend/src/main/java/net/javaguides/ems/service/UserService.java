package net.javaguides.ems.service;

import net.javaguides.ems.entity.User;
import net.javaguides.ems.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Create
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // Read
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long userId) {
        return userRepository.findById(userId);
    }

    // Update
    public User updateUser(User user) {
        return userRepository.save(user);
    }

    // Delete
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}
