package xjzapp;


import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

import javax.naming.NamingException;

import com.alibaba.fastjson.JSONObject;
import com.justep.baas.action.ActionContext;




public class XjzLogs {
private static final String DATASOURCE_XJZAPP = "xjzapp";
public static JSONObject writeLogs(JSONObject params, ActionContext context) throws SQLException, NamingException {
		
	Connection conn = context.getConnection(DATASOURCE_XJZAPP);
	Statement stm = conn.createStatement();
	int org_id = params.getIntValue("org_id");
	String logs_content = params.getString("logs_content");
	int writer_id = params.getIntValue("writer_id");
	String writer_name = params.getString("writer_name");
	try{
		String sql = "insert into xjz_logs (org_id,logs_content,writer_id,writer_name) values ("+org_id+",'"+logs_content+"',"+writer_id+",'"+writer_name+"')";
				
		JSONObject ret = new JSONObject();
		boolean result;
		int  r = stm.executeUpdate(sql);;
		if (r==0)
		{
			result = false;
			
		}else{
			
			result = true;
			
		}
		
		
		
		ret.put("result", result);
		return ret;
	} finally {
		stm.close();
		conn.close();
	}
	
	
		
	
	
}
}
