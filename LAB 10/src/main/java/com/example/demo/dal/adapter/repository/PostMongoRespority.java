package com.example.demo.dal.adapter.repository;

import org.springframework.stereotype.Repository;

import com.example.demo.dal.model.PostModel;

import org.springframework.data.mongodb.repository.MongoRepository;

@Repository
public interface PostMongoRespority extends MongoRepository<PostModel, String> {

}
