package com.bart.blog.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "categories")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;


    @RequestMapping(value = "")
    public String testTemplate() {
        return "index";
    }


    @ResponseBody
    @RequestMapping(value = "test-create")
    public Page<Category> testCreate(Pageable pageRequest) {
//        Category news = new Category("News");
//        categoryRepository.save(news);
//
//        Category sports = new Category("Sports");
//        categoryRepository.save(sports);
//
//        Category health = new Category("Health");
//        categoryRepository.save(health);
//
//        Category beauty = new Category("Beauty");
//        categoryRepository.save(beauty);


        Page<Category> categoryPage = categoryRepository.findAll(pageRequest);

        return categoryPage;
    }

    @ResponseBody
    @RequestMapping(value = "test-children")
    public Page<Category> testChildren(Pageable pageRequest) {
//        Category sports = new Category("Sports");
//        sports.addChildren(new ArrayList<Category>() {{
//            add(new Category("Basketball"));
//            add(new Category("Hockey"));
//            add(new Category("Soccer"));
//            add(new Category("Football"));
//        }});

//        Category soccer = new Category("Soccer");

//        sports.addChild(soccer);
//        soccer.setParent(sports);

//        categoryRepository.save(sports);

        Page<Category> categoryPage = categoryRepository.findAll(pageRequest);

        return categoryPage;
    }

    @ResponseBody
    @RequestMapping(value = "test-pageable")
    public Pageable testPageable(Pageable pageRequest) {
        return pageRequest;
    }

}
