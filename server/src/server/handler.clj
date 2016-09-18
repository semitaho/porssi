(ns server.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [monger.core :use [connect-via-uri get-db]]
            [monger.collection :as mc]

  )
)

(def MONGO_URI_PARAM "MONGOPORSSI")

(defroutes app-routes
  (GET "/" []
    "Hello World")
  (route/not-found "Not Found"))


(defn init[]
    (let [ {:keys [conn db]} (connect-via-uri (System/getenv MONGO_URI_PARAM))
            coll "team"
         ]
           (println "DB IS " (mc/find db coll) )
    )
)


(def app
  (wrap-defaults app-routes site-defaults))
