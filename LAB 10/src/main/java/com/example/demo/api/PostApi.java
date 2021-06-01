package com.example.demo.api;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Post;
import com.example.demo.domain.PostDataAdapter;

@Service
public class PostApi {
	
	
	PostDataAdapter postDataAdapter;
	
	private final Map<String ,Post>posts;
	
	@Autowired
	public PostApi(PostDataAdapter postDataAdapter) {
		this.posts =new HashMap<>();
		this.postDataAdapter=postDataAdapter;
	}
	
	
	public List<Post> getAllPosts(){
		return new ArrayList<>(posts.values());
	}
	
	
	
	
	
	public Post addPost(Post post) {
		post.setPostedDate(LocalDateTime.now());
		post= postDataAdapter.save(post);
		
		return post;
	}
	
	
	public void deletePost( int id) {
		posts.remove(id);
	}
	
//	public Post addPost(Post post) 
//	{ 
//		post.setPostedDate(LocalDateTime.now());
//		post = postDataAdapter.save(post);
//		return post;
//		
//	}
	
	

}
