package xjzapp;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.naming.NamingException;

import com.alibaba.fastjson.JSONObject;
import com.justep.baas.action.ActionContext;

public class QueryXjzModule {
	private static final String DATASOURCE_XJZAPP = "xjzapp";
	public static JSONObject queryXjzModule(JSONObject params, ActionContext context) throws SQLException, NamingException {
			
		Connection conn = context.getConnection(DATASOURCE_XJZAPP);
		Statement stm = conn.createStatement();
		int module_id = params.getIntValue("module_id");
		
		try{
			String sql = "select * from xjz_module where id="+module_id;
					
			JSONObject ret = new JSONObject();
			
			ResultSet  result = stm.executeQuery(sql);
			result.next();
			String module_name = result.getString("module_name");
			String module_icon = result.getString("module_icon");
			String module_uri = result.getString("module_uri");
			
			
			ret.put("module_name",module_name);
			ret.put("module_icon",module_icon);
			ret.put("module_uri",module_uri);
			return ret;
		} finally {
			stm.close();
			conn.close();
		}
		
		
			
		
		
	}
}
