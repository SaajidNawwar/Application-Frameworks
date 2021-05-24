package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.api.PostApi;
import com.example.demo.domain.Post;
import com.example.demo.dto.PostDto;
import com.example.demo.model.Book;


@RestController
@RequestMapping("/posts")
public class PostEndpoint {
	
	
	
	private PostApi postApi;
	
	@Autowired
	public PostEndpoint(PostApi postApi) {
		
		this.postApi=postApi;
	}
	
	
	@GetMapping
	public List<Post> getPosts(){
		return postApi.getAllPosts();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Post addPost(PostDto postDto) {
		Post post = new Post();
		post.setDescription(postDto.getDescription());
		post.setName(postDto.getName());
		return postApi.addPost(post);
		
	}
	
	/////////
	
	@DeleteMapping("/findAllBooks/{id}")	
	public String  deleteBook( @PathVariable int id) {
		bookRepository.deleteById(id);
		return "bbbbbbbbbb"+id;
		
		
	}
	
	///////
	
	
	@DeleteMapping("/{id}")
	public void deletePost(@PathVariable int id) {
		postApi.deletePost(id);
			}
	
	

	
	
	}
	
}
