class SessionsController < ApplicationController
    # include CurrentUSerConcern

    def login
        user = User.find_by(name: params[:name])
        if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :accepted
        else
            render json: { error: "Wrong email or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        render json: { message: "Logged Out"}
    end

end

#     def create 
#         user = User.find_by(email: params["user"]["email"])
#         .try(:authenticate, params["user"]["password"])

#         if user
#             session[:user_id] = user.id
#             render json: {
#                 status: created,
#                 logged_in: true,
#                 user: user
#             }
#         else
#             render json: {status: 401}
#         end
#     end

#     def logged_in
#         if @current_user
#             render json: {
#                 logged_in: true,
#                 user: @current_user
#             }
#         else
#             render json: {
#                 logged_in: false
#             }
#         end
#     end

#     def logout
#         reset_session
#         render json: {status: 200, logged_out: true}
#     end
# end