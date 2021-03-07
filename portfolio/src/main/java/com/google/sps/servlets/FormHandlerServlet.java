package com.google.sps.servlets;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        // Get the value entered in the form.
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String message = request.getParameter("message");

        String responseMsg =  String.format("\nYou submitted name:%s, \nemail:%s, \nphone:%s, \nmessage:%s", name, email, phone, message);
        System.out.printf(responseMsg);
        response.getWriter().println(responseMsg);
        response.sendRedirect("/index.html");
    }
}