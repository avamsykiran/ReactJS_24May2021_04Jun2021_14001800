package com.cts.taskmanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.taskmanager.entity.Task;

@Repository
public interface TaskRepo extends JpaRepository<Task,Integer>{

}
