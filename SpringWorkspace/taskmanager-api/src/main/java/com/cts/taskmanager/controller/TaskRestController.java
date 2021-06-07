package com.cts.taskmanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.taskmanager.entity.Task;
import com.cts.taskmanager.repo.TaskRepo;

@RestController
@CrossOrigin
@RequestMapping("/tasks")
public class TaskRestController {

	@Autowired
	private TaskRepo taskRepo;
	
	@GetMapping
	public ResponseEntity<List<Task>> getAll(){
		return ResponseEntity.ok(taskRepo.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Task> getById(@PathVariable("id")int id){
		Task task = taskRepo.findById(id).orElse(null);
		return task!=null? ResponseEntity.ok(task): new ResponseEntity<Task>(HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delById(@PathVariable("id")int id){
		taskRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Task> create(@RequestBody Task task) throws Exception{
		if(taskRepo.existsById(task.getTaskId()))
			throw new Exception("Task already found");
		task = taskRepo.save(task);
		return ResponseEntity.ok(task);
	}
	
	@PutMapping
	public ResponseEntity<Task> update(@RequestBody Task task) throws Exception{
		if(!taskRepo.existsById(task.getTaskId()))
			throw new Exception("No Such task found");
		task = taskRepo.save(task);
		return ResponseEntity.ok(task);
	}

}