package com.bart.blog.core.behavior;

import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import java.util.Date;

public class TimestampableListener {

    @PrePersist
    public void prePersist(Timestampable e) {
        e.setDateCreated(new Date());
    }

    @PreUpdate
    public void preUpdate(Timestampable e) {
        e.setDateModified(new Date());
    }

}
