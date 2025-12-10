package com.example.meet;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockHttpSession;

import com.example.meet.utils.Verify;

@SpringBootTest
class MeetTimeApplicationTests {

    // @Test
    // void contextLoads() {
    // }

    @Test
    void validUserTest() {
        MockHttpSession session = new MockHttpSession();
        session.setAttribute("user", "foo");
        assertEquals("foo", Verify.validUser(session).orElse(null));

        session.setAttribute("user", "root");
        assertNotEquals("foo", Verify.validUser(session).orElse(null));

        session.removeAttribute("user");
        assertTrue(Verify.validUser(session).isEmpty());
    }

    @Test
    void rootUserTest() {
        MockHttpSession session = new MockHttpSession();
        session.setAttribute("user", "root");
        assertEquals("root", Verify.rootUser(session).orElse(null));

        session.removeAttribute("user");
        assertTrue(Verify.validUser(session).isEmpty());
    }

}
