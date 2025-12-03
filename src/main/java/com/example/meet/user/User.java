package com.example.meet.user;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("users")
record User(@Id Integer id, String name) {
}
