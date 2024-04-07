package br.com.ono.todolist.filter;

import java.io.IOException;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import at.favre.lib.crypto.bcrypt.BCrypt;
import br.com.ono.todolist.user.IUserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class FilterTaskAuth extends OncePerRequestFilter {

    @Autowired
    private IUserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        var servletPath = request.getServletPath();
        if (servletPath.startsWith("/tasks/")) {

            var authorization = request.getHeader("Authorization"); // >>> "Basic xxxxxxxx"
            var authCoded = authorization.substring("Basic".length()).trim(); // >>> "xxxxxxxx"
            byte[] authDecoded = Base64.getDecoder().decode(authCoded); // >>> "username:password"
            var authStr = new String(authDecoded);
            String[] credentials = authStr.split(":");
            String username = credentials[0];
            String password = credentials[1];
            System.out.println("username: " + username + "\n" + "password: " + password);

            // Valida o usuário
            var user = this.userRepository.findByUsername(username);
            if (user == null) {
                response.sendError(401);
            } else {
                // Valida senha
                var passwordOk = BCrypt.verifyer().verify(password.toCharArray(), user.getPassword());
                if (passwordOk.verified) {
                    request.setAttribute("userId", user.getId());
                    filterChain.doFilter(request, response);
                } else {
                    response.sendError(401);
                }
            }
        }
        else {
            filterChain.doFilter(request, response);
        }
    }

}
