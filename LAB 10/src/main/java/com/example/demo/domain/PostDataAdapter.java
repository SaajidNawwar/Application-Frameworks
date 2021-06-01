package com.example.demo.domain;

import java.util.List;

public interface PostDataAdapter {
	
	
	Post save(Post post);
	List<Post> getAll();
	public Post update(Post post);

}
