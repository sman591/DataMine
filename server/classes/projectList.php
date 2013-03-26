<?php class ProjectList {
	
	public function get() {
		
		global $db;
		
		foreach ($db->query("SELECT `id` 
					FROM `projects` ORDER BY `modified` DESC") as $data) {
		
			$project_ids[] = $data['id'];
					
		}
		
		echo '[';

		foreach ($project_ids as $index => $id) {
			
			$project = new Project($id);
			$project->get();

			if ($index < (count($project_ids) - 1))
				echo ',';
			
		}
		
		echo ']';
		
	}
	
}