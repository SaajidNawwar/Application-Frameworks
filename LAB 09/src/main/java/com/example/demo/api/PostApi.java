package com.example.demo.api;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.demo.domain.Post;

@Service
public class PostApi {
	
	
	private final Map<String ,Post>posts;
	
	public PostApi() {
		this.posts =new HashMap<>();
	}
	
	
	public List<Post> getAllPosts(){
		return new ArrayList<>(posts.values());
	}
	
	
	
	
	
	public Post addPost(Post post) {
		post.setId(UUID.randomUUID().toString());
		posts.put(post.getId(),post);
		return post;
	}
	
	
	public void deletePost( int id) {
		posts.remove(id);
	}
	
	
	
	

}
