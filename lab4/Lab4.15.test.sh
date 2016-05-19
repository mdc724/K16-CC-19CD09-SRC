curl "https://<instance_name>/api/sn_k16_install/setup/user" \
--request POST \
--header "Accept:application/json"\
--header "Content-Type:application/json" \
--data "{\"username\":\"itest1\",\"password\":\"tester1\",\"displayName\":\"Test User\"}" \
--user 'admin':'admin'