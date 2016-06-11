package com.bart.blog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class BartBlogApplication {

	public static void main(String[] args) {
		SpringApplication.run(BartBlogApplication.class, args);
	}

}
