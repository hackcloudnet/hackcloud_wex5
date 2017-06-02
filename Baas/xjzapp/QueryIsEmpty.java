package xjzapp;
	import java.sql.Connection;
import java.sql.ResultSet;
	import java.sql.SQLException;
import java.sql.Statement;

	import javax.naming.NamingException;

	import com.alibaba.fastjson.JSONObject;
import com.justep.baas.action.ActionContext;
public class QueryIsEmpty {

		private static final String DATASOURCE_XJZAPP = "xjzapp";
		public static JSONObject queryIsEmpty(JSONObject params, ActionContext context) throws SQLException, NamingException {
				
			Connection conn = context.getConnection(DATASOURCE_XJZAPP);
			
			Statement stm = conn.createStatement();
			String tableName = params.getString("tablename");
			String queryString = params.getString("querystring");
			
			try{
				String sql = "select count(*) as cs from "+tableName+"  where "+queryString;
						
				
				
				ResultSet  result = stm.executeQuery(sql);
				result.next();
				int cs = result.getInt("cs");
				JSONObject ret = new JSONObject();
				ret.put("count", cs);
				return ret;
			} finally {
				stm.close();
				conn.close();
			}
			
			
				
			
			
		}
	
}
