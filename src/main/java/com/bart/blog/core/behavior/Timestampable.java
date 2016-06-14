package com.bart.blog.core.behavior;

import java.util.Date;

public interface Timestampable {

    Date getDateCreated();

    void setDateCreated(Date date);

    Date getDateModified();

    void setDateModified(Date date);

}
